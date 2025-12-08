#include<iostream.h>
#include<conio.h>
/*
	-> compile-time(overloading)

	int + int  |  float + int
	class + int
	class + class

	operator overloading
	*->syntex
	return_type operator operator_symbol ( arg )
	{
		// statement
		return return_value;
	}
*/
class Demo
{
	public:
	int x,y;
	Demo()
	{
		x = 0;
		y = 0;
	}
	int operator + (int add)
	{
		x += add;
		y += add;
		return 0;
	}
	Demo operator + (Demo &h)
	{
		Demo t;
		t.x = x + h.x;
		t.y = y + h.y;
		return t;
	}
};
void main ()
{
	clrscr();
	/*Demo d;
	d + 10;
	d + 89;*/
	Demo d1,d2,d;
	d1.x = 10;
	d1.y = 20;
	d2.x = 90;
	d2.y = 55;
	d = d1 + d2;
	cout<<"x = "<<d.x<<endl;
	cout<<"y = "<<d.y<<endl;

	getch();
}
