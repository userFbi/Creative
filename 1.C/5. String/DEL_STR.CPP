#include<stdio.h>
#include<conio.h>

void deleteChar(char *str,int pos)
{

	int len = strlen(str);

	if(pos < 0 || pos >= len)
	{
	    printf("Invalid position\n");
	    return;
	}

	for(int i = pos; i<len-1; i++)
	{
	    str[i] = str[i+1];
	}
}

int main()
{
	char str[100];
	int pos;

	clrscr();

	printf("Enter string : ");
	fgets(str,sizeof(str),stdin);

	size_t len = strleng(str);
	if(len > 0 && str[len - 1] == '\n')
	{
	    str[len - 1] = '\0';
	}

	printf("Enter Position to delete : ");
	scanf("%d",&pos);

	deleteChar(str,pos);
	printf("Modified strong : %s\n",str);

	return 0;
}