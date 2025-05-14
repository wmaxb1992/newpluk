import markdown
import pdfkit

def create_pdf_from_markdown():
    # Read markdown content
    with open('project-structure-and-rules.md', 'r') as f:
        md_content = f.read()
    
    # Convert markdown to HTML
    html_content = markdown.markdown(md_content, extensions=['fenced_code', 'tables'])
    
    # Add basic styling
    styled_html = f"""
        <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; }}
                    code {{ background: #f4f4f4; padding: 2px 5px; }}
                    pre code {{ display: block; padding: 10px; overflow-x: auto; }}
                </style>
            </head>
            <body>
                {html_content}
            </body>
        </html>
    """

    # Convert HTML to PDF
    pdfkit.from_string(styled_html, 'project-structure-and-rules.pdf', options={
        'encoding': 'UTF-8',
        'margin-top': '20mm',
        'margin-right': '20mm',
        'margin-bottom': '20mm',
        'margin-left': '20mm'
    })

create_pdf_from_markdown()