#include<stdio.h>
#include<conio.h>

/*
	Enter String : welcome to cdmi
	length is 15
*/
void main()
{
	char s[100];
	int i,count = 0;
	clrscr();

	printf("Enter String : ");
	scanf("%s", &s);


	printf("string is %s", s);

	for(i=0 ; s[i]!=NULL ; i++)
	{
		printf("\n -> %c",s[i]);
	}


	for(i=0; s[i]!=NULL; i++)
	{
		count++;
	}       printf("\nCount : %d",count);

	getch();
}