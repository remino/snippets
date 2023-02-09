#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int *array = malloc(10 * sizeof(int));
	if (array == NULL) {
		printf("malloc failed");
		return 1;
	}
	for (int i = 0; i < 10; i++) {
		array[i] = i;
	}
	for (int i = 0; i < 10; i++) {
		printf("%d ", array[i]);
	}
	printf("done");
	return 0;
}
