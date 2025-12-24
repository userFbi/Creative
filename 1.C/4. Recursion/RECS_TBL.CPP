#include<stdio.h>
#include<conio.h>

void table(int n, int i)
{
	if(i<=10)
	{
		printf("\n%d * %d = %d",n,i,n*i);
		table(n,i+1);
	}
}

void main()
{
	int n;
	clrscr();
	printf("Enter Number : ");
	scanf("%d",&n);

	table(n,1);
	getch();
}
