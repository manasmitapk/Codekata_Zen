#include <bits/stdc++.h>
using namespace std;
 
struct node {
    int val;
    node *next;
    node() {
        next = NULL;
    }
};
 
int main() {
    node *head = NULL;
    node *prev = NULL;
    int n;
    cin >> n;
    for(int i = 0; i < n; i++) {
        node *temp = new node();
        cin >> temp -> val;
        if(head == NULL) {
            head = temp;
            prev = temp;
        } else {
            prev -> next = temp;
            prev = temp;
        }
    }
 
    unordered_map<int, bool> m;
    prev = NULL;
    node *temp = head;
    while(temp != NULL) {
        if(m[temp -> val]) {
            // already seen so remove it
            prev -> next = temp -> next;
        } else {
            m[temp -> val] = true;
            if(prev != NULL) {
                prev -> next = temp;    
            }
            prev = temp;
        }
        temp = temp -> next;
    }
 
    while(head != NULL) {
        if(head -> next == NULL) {
            cout << head -> val;
        } else {
            cout << head -> val << ' ';    
        }
        head = head -> next;
    }
 
    return 0;
}