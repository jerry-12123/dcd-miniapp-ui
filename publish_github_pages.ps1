param(
  [string]$RepoName = "dcd-miniapp-ui"
)

$ErrorActionPreference = "Stop"

gh auth status | Out-Host

$owner = gh api user --jq ".login"
if (-not $owner) {
  throw "GitHub username was not found. Please run gh auth login first."
}

git branch -M main

$fullRepo = "${owner}/${RepoName}"
$repoExists = $true
try {
  gh repo view $fullRepo | Out-Null
} catch {
  $repoExists = $false
}

if (-not $repoExists) {
  gh repo create $RepoName --public --source "." --remote "origin" --push
} else {
  $origin = ""
  try { $origin = git remote get-url origin } catch {}
  if (-not $origin) {
    git remote add origin "https://github.com/${owner}/${RepoName}.git"
  }
  git push -u origin main
}

$pagesPayload = @{
  source = @{
    branch = "main"
    path = "/"
  }
} | ConvertTo-Json -Depth 4

$tmp = New-TemporaryFile
try {
  Set-Content -LiteralPath $tmp -Value $pagesPayload -Encoding UTF8
  try {
    gh api -X POST "repos/${owner}/${RepoName}/pages" --input $tmp | Out-Null
  } catch {
    gh api -X PUT "repos/${owner}/${RepoName}/pages" --input $tmp | Out-Null
  }
} finally {
  Remove-Item -LiteralPath $tmp -Force
}

Write-Host ""
Write-Host "GitHub Pages is configured:"
Write-Host "https://${owner}.github.io/${RepoName}/"
Write-Host ""
Write-Host "If you see 404, wait 1-3 minutes and refresh."
