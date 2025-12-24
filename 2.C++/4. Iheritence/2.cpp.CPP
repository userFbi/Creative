#include<iostream.h>
#include<conio.h>
class A
{
	public:
	int abc;
};
class B
{
	public:
	A a;
	B()
	{
		a.abc = 90;
		cout<<"abc = "<<a.abc<<endl;
	}
	void test()
	{
		cout<<"test::a = "<<a.abc<<endl;
	}
};
void main()
{
	clrscr();
	B d;
	d.test();
	cout<<"main::abc = "<<d.a.abc<<endl;
	getch();
}