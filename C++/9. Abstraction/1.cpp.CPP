#include<iostream.h>
#include<conio.h>
/*
	abstraction
	-> virtual function
	-> pure virtual function
	*-> syntex
		virtual return_type function_name ( arg ) = 0;
	*-> Rules
	- Can't create instance of abstract class
	- in abstract class has normal and abstract function
*/
// abstract class
class Base
{
	// pure virtual function / abstract function
	virtual void name() = 0;
	public:
	void test()
	{
		cout<<"test\n";
		name();
	}
};
class A : public Base
{
	public:
	void name()
	{
		cout<<"class A\n";
	}
};
class B : public Base
{
	public:
	void name()
	{
		cout<<"class B\n";
	}
};
void main()
{
	clrscr();
	A aa;
	//aa.name();
	aa.test();
	getch();
}