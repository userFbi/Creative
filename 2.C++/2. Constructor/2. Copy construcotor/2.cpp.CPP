#include<iostream.h>
#include<conio.h>

class Copy
{
	public :
	int size;
	int a[10];
	Copy()
	{
		int i;
		cout<<"enter size of array : ";
		cin>>size;
		for(i=0; i<size; i++)
		{
			cout<<i+1<<" -> ";
			cin>>a[i];
		}
	}
	Copy(Copy &d)
	{
		int i;
		size = d.size;
		for(i=0; i<size; i++)
		{
			a[i] = d.a[i];
		}
	}
	void sort()
	{
		int i,j,temp;
		for(i=0; i<size; i++)
		{
			for(j=i+1; j<size; j++)
			{
				temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}
		for(i=0; i<size; i++)
		{
			cout<<a[i]<<endl;
		}
	}
};

void main()
{
	int i;
	clrscr();

	Copy d;
	Copy c(d);

	cout<<" -> Copy of array"<<endl;
	c.sort();

	cout<<"Common elements of array"<<endl;
	for(i=0; i<c.size; i++)
	{
		if(d.a[i] == c.a[i])
		{
			cout<<d.a[i]<<endl;
		}
	}

	getch();
}