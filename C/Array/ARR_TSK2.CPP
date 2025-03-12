#include<stdio.h>
#include<conio.h>

/*
	find the sum of Row
*/

void main()
{
	int a[3][3] = {
		{1,2,3},
		{4,5,6},
		{7,8,9}
	};
	int i,j,sum=0;
	clrscr();

	for(i=0; i<3; i++)
	{
		for(j=0 ; j<3 ; j++)
		{
			printf("%d\t",a[i][j]);
		}
				sum = 0;
		for(j=0; j<3; j++)
		{
			sum+=a[i][j];
		}
		printf("Sum : %d\t",sum);
		printf("\n\n");
	}


	for(i=0; i<3; i++)
	{

	}
	getch();
}