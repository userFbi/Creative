#include<iostream.h>
#include<conio.h>
class Demo
{
	public :
	int a;
	void test()
	{
		cout<<"Test"<<endl;
	}
};
void main ()
{
	class Demo n[10];
	int i;
	clrscr();
                    	
	n[0].a = 10;
	n[1].a = 20;
	n[2].a = 60;
	n[3].a = 70;
	n[4].a = 80;
	n[5].a = 90;
	n[6].a = 30;
	n[7].a = 50;
	n[0].test();

	for(i=0; i<8; i++)
	{
		cout<<"n["<<i<<"].a = "<<n[i].a<<endl;
	}

	getch();
}
