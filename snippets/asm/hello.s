.data

	HelloWorldString:
	.ascii "Hello World\n"

.text

.globl _start

_start:
	# load all the arguments for write()
	movl $4, %eax
	movl $1, %ebx
	movl $HelloWorldString, %ecx
	movl $12, %edx
	# raises software interrupt to call write()
	int $0x80

	# call exit()
	movl $1, %eax
	movl $0, %ebx
	int $0x80
