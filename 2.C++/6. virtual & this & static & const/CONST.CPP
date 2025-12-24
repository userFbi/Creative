#include<iostream.h>
#include<conio.h>
/*
	const keyword
*/
class Base
{
	public:
	const int a;
	Base() : a(88) {}
};
void main()
{
	clrscr();
	Base b;
	cout<<"a="<<b.a;
	getch();
}