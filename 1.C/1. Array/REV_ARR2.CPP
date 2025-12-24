#include<stdio.h>
#include<conio.h>

void reverseArray(int arr[], int size)
{
	int start = 0,end = size - 1;

	while(start < end)
	{
		int temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;

		start++;
		end--;
	}
}

void printArray(int arr[],int size)
{
	int i;
	for(i=0; i<size; i++)
	{
		printf("%d",arr[i]);
	}
	printf("\n");
}

void main()
{
	int arr[] = {1,2,3,4,5};
	int size = sizeof(arr) / sizeof(arr[0]);
	clrscr();

	printf("Original Array : ");
	printArray(arr,size);

	reverseArray(arr,size);
	printf("Reversed Array : ");
	printArray(arr,size);

	getch();
}