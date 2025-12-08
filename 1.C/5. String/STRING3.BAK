#include<stdio.h>
#include<conio.h>

/*
	Enter String : Test @123.com
	Total length
	Total digit
	Total uppercase
	Total lowercase
	Total space
	Total special char
	Total words
*/

void main()
{
	char s[100];
	int i,length = 0, digit=0, upr=0;
	clrscr();

	printf("Enter String : ");
	gets(s);
	printf("string is %s", s);

	for(i=0 ; s[i]!=NULL ; i++)
	{
		printf("\n -> %c",s[i]);
		length++;
		if(s[i] >= 48 && s[i]<=57)
		{
			digit++;
		}
		if(s[i] >= 'A' && s[i] <= 'Z')
		{
			upr++;
		}
	}

	printf("\nlength : %d\n",length);
	printf("Uppercase : %d\n",upr);
	printf("Total Digit : %d\n", digit);

	getch();
}