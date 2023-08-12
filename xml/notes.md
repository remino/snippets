Some notes on XML in browsers
=============================

2023-08-12

- None of the major browsers seem to care about the DTD, even if you link it with a `<!DOCTYPE>`.
  - However, Safari and Chrome will download it when there is a XSLT set.
	- But even then, no validation is done on the XML.
	- Safari will not download the DTD if its MIME type is set to `application/xml-dtd`.
	  - But it will accept it as `application/xml`.
	  - Chrome will accept it with either MIME type.
	- Both browsers will only interpret linked XSLT files if linked with MIME type `text/xsl`.
	  - As in `<?xml-stylesheet href="page.xslt" type="text/xsl"?>`.
	  - If the official MIME type is set, `application/xslt+xml`, they will not see it.
  - Firefox never downloads the DTD, no matter what.
  - Safari & Chrome will complain if the transformation results in an empty document.
	- Firefox will just display the text value of the whole XML document in a `<transformiix:result>` tag, no HTML document.
