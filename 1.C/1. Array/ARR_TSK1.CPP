#include<stdio.h>
#include<conio.h>

/*
	Find min value
	Find max value
*/

void main()
{
	int a[3][3] = {
		{11,2,3},
		{4,15,16},
		{5,8,9}
	};
	int i,j;
	clrscr();

	for(i=0; i<3; i++)
	{
		for(j=0; j<3; j++)
		{
			printf("%d\t",a[i][j]);
		}
		printf("\n");
	}

	int min = a[0][0];
	for(i=0; i<3; i++)
	{
		for(j=0; j<3; j++)
		{
			if(min > a[i][j])
			{
				min = a[i][j];
			}
		}
	}
	printf("Min Value : %d\n",min);

	int max = a[0][0];
	for(i=0; i<3; i++)
	{
		for(j=0; j<3; j++)
		{
			if(max < a[i][j])
			{
				max = a[i][j];
			}
		}
	}
	printf("Max Value : %d\n",max);
	getch();
}
