Add-Type -AssemblyName System.Drawing
try {
    $bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\USER\.gemini\antigravity\brain\6ceb099a-d44d-48c9-824a-e11cc3cf80b9\uploaded_image_1768742510090.jpg")
    
    $coords = @(
        @{X = 50; Y = 50 },
        @{X = 100; Y = 100 },
        @{X = 10; Y = 300 } 
    )

    foreach ($p in $coords) {
        $color = $bmp.GetPixel($p.X, $p.Y)
        $hex = "#{0:X2}{1:X2}{2:X2}" -f $color.R, $color.G, $color.B
        Write-Host "AT ($($p.X),$($p.Y)): $hex"
    }

    $bmp.Dispose()
}
catch {
    Write-Host "Error: $_"
}
