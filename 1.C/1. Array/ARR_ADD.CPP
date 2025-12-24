#include<stdio.h>
#include<conio.h>
/*
	replace element
	10,20,30,10,20,10,
	10 -> 50
	50,20,30,50,20,50
*/
void print(int a[], int size)
{
	printf("\n--OUTOUT--\n");
	int i;
	for(i=0; i<size; i++)
	{
		printf("a[%d] : %d\n",i,a[i]);
	}
}

void addElement(int a[], int size, int addPosition, int addValue)
{
	int i;
	/*a[4] = a[3];
	a[3] = a[2];
	a[2] = a[1];*/

	for(i=size ; i>addPosition ; i--)
	{
		a[i] = a[i-1];
	}
	a[addPosition] = addValue;
}

void main()
{
	int i,a[20],size,addPosition,addValue;
	clrscr();

	printf("Enter size of array : ");
	scanf("%d",&size);

	for(i=0; i<size; i++)
	{
		printf("a[%d] : ",i);
		scanf("%d", &a[i]);
	}

	printf("Enter Add Position : ");
	scanf("%d",&addPosition);

	printf("Enter Add Value : ");
	scanf("%d",&addValue);

	addElement(a,size,addPosition,addValue);
	size++;

	print(a,size);

	getch();
}