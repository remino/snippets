#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
	FILE *file = fopen("file.txt", "r");
	if (file == NULL) {
		printf("fopen failed");
		return 1;
	}
	char *line = NULL;
	size_t len = 0;
	ssize_t read;
	while ((read = getline(&line, &len, file)) != -1) {
		printf("Retrieved line of length %zu: %s", read, line);
	}
	free(line);
	fclose(file);
	return 0;
}
