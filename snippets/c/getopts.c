#include <stdio.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
	int opt;
	while ((opt = getopt(argc, argv, "a:b:c")) != -1) {
		switch (opt) {
		case 'a':
			printf("option a: %s", optarg);
			break;
		case 'b':
			printf("option b: %s", optarg);
			break;
		case 'c':
			printf("option c");
			break;
		default:
			printf("unknown option");
			break;
		}
	}
	return 0;
}
