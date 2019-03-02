# Python Server Installation

1. Ensure you have the latest version of Python running on your machine.

2. Configure PATH parameters to your local Python directory (ex. c:\python\scripts)

3. Run the following command(s) in your root directory

```npm
$ pip install -r requirements.txt --no-index --find-links file:///tmp/packages

$ pip install astroid

gunicorn server:app http://127.0.0.1:8000
```
4. Then run 

pip install astroid
From Tony Mamedbekov to Everyone:  03:08 PM
gunicorn server:app
http://127.0.0.1:8000
