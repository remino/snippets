<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
	<xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="yes"/>
	<xsl:template match="/page">
		<html>
			<head>
				<title>
					<xsl:value-of select="title"/>
				</title>
				<link rel="stylesheet" type="text/css" href="style.css"/>
				<script type="text/javascript" src="script.js"></script>
			</head>
			<body>
				<h1>
					<xsl:value-of select="title"/>
				</h1>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
