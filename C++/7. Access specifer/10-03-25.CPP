#include<iostream.h>
#include<conio.h>
class Base
{
	protected:
	int a;
};
class Child : public Base
{
	public:
	Child()
	{
		a = 10;
	}
};
void main()
{
	clrscr();
	Base b;
	b.a = 90;
	getch();
}