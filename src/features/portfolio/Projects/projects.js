import movieBrowserImage from "../../../images/movieBrowserProject.png";
import tasksListImage from "../../../images/tasksListProject.png";
import currencyConverterImage from "../../../images/currencyConverterProject.png";

const projects = [
  {
    title: `Movies Browser`,
    description: `&nbsp&nbsp The Movie Browser is an intuitive web application designed to enhance your movie-watching experience
                  by allowing users to search for movies, cast, and crew members effortlessly.
                  <p>This four-week project was developed as the final group project during "YouCode" Front-End Development course and it was based on a professional graphic design.</p>
                  &nbspOur team of three developers collaborated to create a sleek and user-friendly interface that provides detailed information on a wide array of movies and their associated personnel. <br>
                  <p>The application is designed for optimal performance on different devices and is under constant development and improvement.</p>`,
    imageURL: `${movieBrowserImage}`,
    GitHubPagesURL: "https://boostertech.github.io/MovieBrowser/#/movies",
    GitHubRepoURL: "https://github.com/BoosterTech/MovieBrowser.git",
    inverted: false,
  },
  {
    title: `Tasks List`,
    description: `<p>&nbsp&nbsp The "Tasks List" application is a robust and user-friendly task management tool designed to enhance productivity and organization. 
                  This project allows users to seamlessly add tasks to a dynamic list, track their completion status, and manage them with ease.
                   Key features include:</p>

                  <p><strong>Task Addition</strong>: Quickly add new tasks to the list with a straightforward input interface.</p>
                  <p><strong>Mark as Done/Undone</strong>: Easily toggle the completion status of tasks, marking them as done or reverting them to undone.</p>
                  <p><strong>Mark All as Done</strong>: Use a single button to efficiently mark all tasks in the list as completed.</p>
                  <p><strong>Hide Completed Tasks</strong>: Simplify the view by hiding tasks that have been marked as done, allowing users to focus on pending tasks.</p>
                  <p><strong>Task Removal</strong>: Remove tasks from the list with a single click, ensuring the task list remains relevant and up-to-date.</p>
                   The "Tasks List" application is built with a clean, intuitive design, prioritizing user experience and productivity. 
                   Whether for personal use or team project management, this tool provides a seamless way to keep track of tasks and ensure nothing falls through the cracks.`,
    imageURL: `${tasksListImage}`,
    GitHubPagesURL:
      "https://boostertech.github.io/To-Do-List-Redux-Saga-Module-14/#/todo-list-module-14/tasks",
    GitHubRepoURL:
      "https://github.com/BoosterTech/To-Do-List-Redux-Saga-Module-14.git",
    inverted: true,
  },
  {
    title: `Currency Converter`,
    description: `<p>&nbsp&nbsp This comprehensive currency converter is powered by data sourced directly from the European Central Bank.</p>
     Seamlessly integrated, it provides real-time exchange rates, ensuring accuracy and reliability in currency conversions.
     <p> Whether you're planning a trip abroad, managing international transactions, or simply curious about currency values,
      this platform empowers you to effortlessly convert any currency to another with confidence.</p> 
    With a user-friendly interface and access to a wide range of currencies, that currency converter is your go-to tool for navigating the global economy. `,
    imageURL: `${currencyConverterImage}`,
    GitHubPagesURL:
      "https://github.com/BoosterTech/Currency-Converter-Fetch-Module-12.git",
    GitHubRepoURL:
      "https://github.com/BoosterTech/Currency-Converter-Fetch-Module-12.git",
    inverted: false,
  },
];

export default projects;
