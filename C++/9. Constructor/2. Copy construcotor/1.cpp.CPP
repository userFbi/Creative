#include<conio.h>
#include<iostream.h>
/*
	copy constructor
*/
class Demo
{
	public:
	int a,b,c;
	Demo()
	{
		cout<<"Enter a = ";
		cin>>a;
		cout<<"Enter b = ";
		cin>>b;
		cout<<"Enter c = ";
		cin>>c;
	}
	Demo(Demo &t)
	{
		a = t.a;
		b = t.b;
		c = t.c;
	}
	void print()
	{
		cout<<"a = "<<a<<endl;
		cout<<"b = "<<b<<endl;
		cout<<"c = "<<c<<endl;
	}
};
void main ()
{
	clrscr();
	Demo d;
	d.print();
	cout<<endl<<"------"<<endl<<endl;
	Demo e(d);
	e.print();
	cout<<endl<<"------"<<endl<<endl;
	Demo f(d);
	f.print();
	getch();
}

