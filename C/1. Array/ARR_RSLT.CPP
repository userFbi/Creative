#include<stdio.h>
#include<conio.h>

/*
	Enter num of student : 2
	Enter name :
	Enter s1 :
	Enter s2 :
	Enter s3 :

	Enter name :
	Enter s1 :
	Enter s2 :
	Enter s3 :

	No.    Name    s1    s2    s3	 total	 per	 result
	1      test    90    70    40	 180	 ? 	 pass/fail
*/


struct Result
{
	int s1,s2,s3;
};

void main()
{
	struct Result n[20];
	int i,size,total,per,result;
	clrscr();
	printf("Enter Students : ");
	scanf("%d",&size);

	for(i=0; i<size; i++)
	{
		printf("\n------------\n");

		printf("Enter sub1 : ");
		scanf("%d", &n[i].s1);

		printf("Enter sub2 : ");
		scanf("%d", &n[i].s2);

		printf("Enter sub3 : ");
		scanf("%d", &n[i].s3);
	}

	printf("\nNo. \ts1\ts2\ts3\tTotal\tPer\tResult\n");
	for(i=0; i<size; i++)
	{
		total = n[i].s1+n[i].s2+n[i].s3;
		per = total/3;
		printf("%d\t",i+1);
		printf("%d\t",n[i].s1);
		printf("%d\t",n[i].s2);
		printf("%d\t",n[i].s3);
		printf("%d\t",total);
		printf("%d%\t",per);
		if(n[i].s1 >= 27 && n[i].s2 >= 27 && n[i].s3 >= 27)
			printf("PASS\n");
		else
			printf("FAIL\n");
	}

	getch();
}
