import binascii
import sys
import os
data = binascii.hexlify(open(sys.argv[1], "r").read())
os.system("google-chrome --app=file://" + os.getcwd() +"/aireditor.html?data=" + data);
