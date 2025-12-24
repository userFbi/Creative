#include<iostream.h>
#include<conio.h>
/*
	* Inheritence-Hybrid
	-> virtual : make override
*/
class A
{
	public:
	int a;
	A()
	{
		cout<<"class A"<<endl;
	}
};
class B : virtual public A
{
	public:
	B()
	{
		cout<<"class B"<<endl;
	}
};
class C : virtual public A
{
	public:
	C()
	{
		cout<<"class C"<<endl;
	}
};
class D : public B, public C
{
	public:
	D()
	{
		cout<<"class D"<<endl;
		a = 20;
	}
};
void main ()
{
	clrscr();
	D d;
	getch();
}
