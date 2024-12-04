# Job Boards

Finding the right job posting that fits your background can be difficult.  The popular job boards such as Indeed and LinkedIn have become less effective over time.  There are other places to find job postings though.

This project provides a simple CSV file listing job boards, as well as a static HTML page to display this list.

## Usage

1. Clone this project
1. Setup and activate the virtual environment

    ```bash
    cd project_directory
    python3 -m venv .venv   # create the .venv directory that contains the virtual environment
    source .venv/bin/activate
    ```

1. Install the dependencies.  At the moment we only use Pandas (to work with the CSV file) and Jinja2 (to create the web pages).

    ```bash
    pip install -r requirements.txt
    ```

1. Edit the `data/jobboards.csv` file to add/modify/remove job boards.  Save the changes into CSV format.

1. Run the shell script `gen_jobboards_page` to create the current web page.  Files will be created in the `dist` folder

    ```bash
    cd scripts
    ./gen_jobboards_page
    ```

1. Edit the `scripts/update_live_site` file to set your SSH details.  Run this file to transfer the contents of the `dist` folder to your SSH server.

    ```bash
    cd scripts
    ./update_live_site
    ```

## Growing the Job Board List

While you can use the job board file locally as you desire, it would be awesome if you helped grow the list.  To do so, create a pull request with your changes to the CSV file and together we'll create a more comprehensive list of job boards.

