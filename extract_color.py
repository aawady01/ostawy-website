try:
    from PIL import Image
    import sys

    image_path = r"e:\androidapps\ostawy-website\images\logo.png"
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        # Get top-left pixel color (assuming solid background)
        r, g, b = img.getpixel((10, 10))
        hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
        print(f"HEX_COLOR:{hex_color}")
    except Exception as e:
        print(f"Error processing image: {e}")
except ImportError:
    print("PIL not installed")
