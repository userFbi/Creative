#include<stdio.h>
#include<conio.h>

int input(int a[])
{
	int size,i;
	printf("Enter Size Of Array : ");
	scanf("%d",&size);
	for(i=0 ; i<size ;i++)
	{
		printf("a[%d] -> ",i);
		scanf("%d",&a[i]);
	}
	return size;

}

void print(int a[], int sizeOne)
{
	int i;
	for(i=0; i<sizeOne; i++)
	{
		printf("a[%d] : %d\n",i,a[i]);
	}
}


void merge(int a[],int b[],int c[],int size)
{
	int i;
	for(i=0; i<size; i++)
	{
		c[i] = a[i] + b[i];
	}
}

void main()
{
	int i,sizeOne,sizeTwo,a[20],b[20],c[20];
	clrscr();

	sizeOne = input(a);
	sizeTwo = input(b);

	print(a,sizeOne);
	print(b,sizeTwo);

	//merge(a,b,c,size);

	//print(a,b,sizeTwo,sizeOne);
	getch();
}



