$mypath = $MyInvocation.MyCommand.Path
$mypath = Split-Path $mypath -Parent

pushd $mypath
Write-Host "Working dir: " $mypath 
try{
    
    
    Write-Host "Starting docker build"
    # Build the Docker image for the current folder 
    # and tag it with `folha-de-obra`
    docker build -f ./Dockerfile . -t folha-de-obra --no-cache
    
    Write-Host "Starting docker run"
    # Run the image and map port 3000 inside the container with 3000 on current host
    docker run -t -i -p 3000:3000 folha-de-obra
}
finally {
    popd
}