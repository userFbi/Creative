#include<stdio.h>
#include<conio.h>

void print(int a[], int size)
{
	printf("\n--PRINT--\n");
	int i;
	for(i=0; i<size; i++)
	{
		printf("a[%d] : %d\n",i,a[i]);
	}
}

void remove(int a[], int size, int removePosition)
{
	int i;
	for(i=removePosition; i<size; i++)
	{
		a[i] = a[i+1];
	}
}

void main()
{
	int size, a[20], i, removePosition;
	clrscr();

	printf("Enter size of array : ");
	scanf("%d",&size);

	for(i=0; i<size; i++)
	{
		printf("a[%d] : ",i);
		scanf("%d", &a[i]);
	}

	printf("Enter Remove Position : ");
	scanf("%d",&removePosition);

	remove(a,size,removePosition);
	size--;

	print(a,size);
	getch();
}