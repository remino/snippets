#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
	FILE *file = fopen("file.txt", "w");
	if (file == NULL) {
		printf("fopen failed");
		return 1;
	}
	char *string = "Hello, world!";
	fprintf(file, "%s", string);
	fclose(file);
	return 0;
}
