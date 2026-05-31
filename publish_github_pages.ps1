param(
  [string]$RepoName = "dcd-miniapp-ui"
)

$ErrorActionPreference = "Stop"

gh auth status | Out-Host

$owner = gh api user --jq ".login"
if (-not $owner) {
  throw "没有获取到 GitHub 用户名，请先运行 gh auth login。"
}

git branch -M main

$repoExists = $true
try {
  gh repo view "$owner/$RepoName" | Out-Null
} catch {
  $repoExists = $false
}

if (-not $repoExists) {
  gh repo create "$RepoName" --public --source "." --remote "origin" --push
} else {
  if (-not (git remote get-url origin 2>$null)) {
    git remote add origin "https://github.com/$owner/$RepoName.git"
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
    gh api -X POST "repos/$owner/$RepoName/pages" --input $tmp | Out-Null
  } catch {
    gh api -X PUT "repos/$owner/$RepoName/pages" --input $tmp | Out-Null
  }
} finally {
  Remove-Item -LiteralPath $tmp -Force
}

Write-Host ""
Write-Host "GitHub Pages 已配置。访问地址："
Write-Host "https://$owner.github.io/$RepoName/"
Write-Host ""
Write-Host "如果页面暂时 404，请等待 1-3 分钟后刷新。"
