#include<iostream.h>
#include<conio.h>

class Demo
{       public :
	int d,h,m,s;
}a,b,c;
void main()
{
	int days=0,hours,minutes,seconds;
	clrscr();

	cout<<"Hours : ";
	cin>>a.h;
	cout<<"Minute : ";
	cin>>a.m;
	cout<<"Seconds : ";
	cin>>a.s;
	cout<<"----------\n";
	cout<<"Hours : ";
	cin>>b.h;
	cout<<"Minute : ";
	cin>>b.m;
	cout<<"Seconds : ";
	cin>>b.s;
	cout<<"----------\n";
	cout<<"Hours : ";
	cin>>c.h;
	cout<<"Minute : ";
	cin>>c.m;
	cout<<"Seconds : ";
	cin>>c.s;

	hours = a.h + b.h + c.h;
	minutes = a.m + b.m + c.m;
	seconds = a.s + b.s + c.s;

	while(seconds>=60)
	{
		seconds -= 60;
		minutes++;
	}

	while(minutes>=60)
	{

		minutes -= 60;
		hours++;
	}

	while(hours>=24)
	{
		hours -= 24;
		days++;
	}

	cout<<"----------\n";
	cout<<" -> "<<days<<" Day"<<endl;
	cout<<" -> "<<hours<<" Hour"<<endl;
	cout<<" -> "<<minutes<<" Minute"<<endl;
	cout<<" -> "<<seconds<<" Seconds"<<endl;

	getch();
}