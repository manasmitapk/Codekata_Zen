#include <iostream>
using namespace std;
 
struct node {
    char c;
    node *next;
    node() {
        next = NULL;
    }
};
 
int main() {
    node* head = NULL;
    node* prev = NULL;
    int n;
    cin >> n;
    for(int i = 0; i < n; i++) {
        node* temp = new node();
        cin >> temp -> c;
        temp -> next = NULL;
        if(head == NULL) {
            head = temp;
            prev = temp;
        } else {
            prev -> next = temp;
            prev = temp;
        }
    }
    string str = "";
    while(head != NULL) {
       str += (head -> c);
       head = head -> next;
    }
    for(int i = 0; i < n / 2; i++) {
        if(str[i] != str[n - 1 - i]) {
            cout << "no";
            return 0;
        }
    }
    cout << "yes";
    return 0;
}