#include<iostream.h>
#include<conio.h>

class Demo
{
	public :
	const int a,k;
	int b;
	Demo() : a(20),b(30),k(80) // initlizer list
	{
		//a = 10;
	}
};

void main()
{
	clrscr();
	Demo d;
	cout<<"d.a =  "<<d.a<<endl;
	getch();
}