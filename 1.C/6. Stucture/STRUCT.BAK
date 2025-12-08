#include<stdio.h>
#include<conio.h>

/*
	Enter First Time :
	H: 12
	M: 23
	S: 46

	Enter Second Time :
	H: 15
	M: 24
	S: 56

	Total day,hour,minute,second;
*/

struct Time
{
	int d,h,m,s;
}a,b;

void main()
{
	int day=0;hours,minute,seconds;
	clrscr();
	printf("1st Hour : ");
	scanf("%d",&a.h);

	printf("1st Minute : ");
	scanf("%d",&a.m);

	printf("1st Second : ");
	scanf("%d",&a.s);

	printf("----------\n");

	printf("2nd Hour : ");
	scanf("%d",&b.h);

	printf("2nd Minute : ");
	scanf("%d",&b.m);

	printf("2nd Second : ");
	scanf("%d",&b.s);
	printf("\n");


	hours = a.h + b.h;
	minute = a.m + b.m;
	seconds = a.s + b.s;

	if(seconds>=60)
	{
		minute++;
	}

	if(minute>=60)
	{
		hours++;
	}

	if(hours>=24)
	{
		day++;
		printf("%d",day);
	}

	printf(" -> %d Hour\n",hours);
	printf(" -> %d Minute\n",minute);
	printf(" -> %d Seconds\n",seconds);


	getch();
}