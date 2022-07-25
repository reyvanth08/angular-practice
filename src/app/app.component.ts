import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'tutorial-app';

    arrOfDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    today = 'Thursday';
    isVisible = true;

    tableHeader = ['Month', 'Savings'];

    monthSavings = [
        {
            month: 'January',
            savings: '$100',
        },
        {
            month: 'February',
            savings: '$80',
        },
        {
            month: 'March',
            savings: '$80',
        },
        {
            month: 'April',
            savings: '$80',
        },
        {
            month: 'May',
            savings: '$80',
        },
        {
            month: 'June',
            savings: '$80',
        },
    ];

    feb = 'February';

    mcq = [
        {
            question: 'What is todays day?',
            answer: 'Monday',
            multipleChoice: ['Monday', 'Tuesday', 'Friday', 'Thursday'],
        }
        // , 
        // {
        //     question: 'What is date day?',
        //     answer: '25',
        //     multipleChoice: ['12', '21', '23', '25'],
        // }
    ];
    
    selectedAnswer: String = "";
    defaultAnswer: String = "";

    displayResult = false;

    ngOnInit() {
        if(this.selectedAnswer == "") {
            console.log("Answer is not selected");
        } else {
            console.log(this.selectedAnswer);
        }
    }

    makeItInvisble() {
        this.isVisible = !this.isVisible;
    }

    checkboxFunc(event: any, index: any) {
        this.selectedAnswer = event.target.value;
        this.defaultAnswer = this.mcq[index].answer;
    }

    checkAnswer() {
        if(this.selectedAnswer === this.defaultAnswer) {
            console.log(this.selectedAnswer+ " - The answer is correct")
            this.displayResult = true;
        } else {
            console.log(this.selectedAnswer + " - Incorrect answer")
            this.displayResult = false;
        }
    }
}

// dataToBeDisplayed = "This is how data binding works!";
// numberToBeDisplayed = 12;
// arrOfNumbers = [1, 2, 3, 4, 5]
// objectOfData = [{
//   key1: "value1",
//   key2: "value2"
// }]
// stringifiedObject = JSON.stringify(this.objectOfData)
