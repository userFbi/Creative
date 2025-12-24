#include<iostream.h>
#include<conio.h>
/*
	Run-Time Polymorphism
	-> same name function in two class
	   with inherited

	:: -> Scope Resulation operator
*/
class Base
{
	public:
	int a;
	void test()
	{
		cout<<"base::test"<<endl;
	}
};
class Derived : public Base
{
	public:
	int a;
	void test()
	{
		Base::test();
		cout<<"Derived::test"<<endl;
		Base::a = 90;
		a = 10;
		cout<<"a = "<<a<<endl;
		cout<<"base::a = "<<Base::a<<endl;
	}
};
void main()
{
	clrscr();
	Derived d;
	d.test();
	//d.Base::test();
	getch();
}