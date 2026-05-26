import sys
try:
    from pypdf import PdfReader
    
    reader = PdfReader("public/UX audit/E-Commerce UX Audit Report – Flipkart.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n\n"
        
    with open("pdf_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Done")
except Exception as e:
    print("Error:", e)
