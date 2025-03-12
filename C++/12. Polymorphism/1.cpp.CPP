#include<iostream.h>
#include<conio.h>
/*
	Polymorphism
	-> same name but behaviour are diff

	2 types of polymorphism
	-> compile-Time
		1. Function Overloading
		2. operator Overloading
	-> Run-Time
		1. Function Overriding


	* * *  Compile-Time  * * *
	-> function name are same but arg are diff
*/
class Base
{
	public:
	void test()
	{
		cout<<"test function"<<endl;
	}
	void test(int a)
	{
		cout<<"int a = "<<a<<endl;
	}
	void test(int a, int b)
	{
		cout<<"a = "<<a<<endl<<"b = "<<b<<endl;
	}
	void test(float f)
	{
		cout<<"float f = "<<f<<endl;
	}
};
void main()
{
	clrscr();
	Base b;
	b.test(27);
	getch();
}