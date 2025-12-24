#include<stdio.h>
#include<conio.h>

/*
	2D Array
	-> 3x3  Matrix
	1 2 3
	4 5 6
	7 8 9

	* * *
	* * *
	* * *

	-> 4x4
	1 2 3 4
	5 6 7 8
	9 10 11 12
	13 14 15 16



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

	for(i=0 ; i<3 ;i++)
	{
		for(j=0 ; j<3 ; j++)
		{
			printf("%d\t",a[i][j]);
		}
		printf("\n");
	}

	for(i=0; i<3; i++)
	{
		for(j=0; j<3; j++)
		{
			sum+=a[i][j];
		}
	}

	printf("Sum of array : %d\n",sum);

	getch();
}