import json
import os


class Jinjasset():
    # SET 0 if is css or set 1 to js
    def test(dist_folder, who):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + "/.." + dist_folder + "/manifest.json") as json_file:
            data = json.load(json_file)
            my_styles = []
            my_js = []
            for p in data:
                extension = os.path.splitext(data[p])[1]
                if(extension == ".js"):
                    my_js.append(
                        '<script src="{0}" type="module"></script>'.format(dist_folder + "/" + data[p]))
                elif(extension == ".css"):
                    my_styles.append(
                        '<link rel=stylesheet type=text/css href="{0}">'.format(dist_folder + data[p]))
        if who == 0:
            return "".join(my_styles)
        elif who == 1:
            return "".join(my_js)

    def all(dist_folder, who):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + "/.." + dist_folder + "/manifest.json") as json_file:
            data = json.load(json_file)
            my_styles = []
            my_js = []
            for p in data:
                extension = os.path.splitext(data[p])[1]
                if(extension == ".js"):
                    my_js.append(
                        '{0}'.format(dist_folder + "/" + data[p]))
                elif(extension == ".css"):
                    my_styles.append(
                        '{0}'.format(dist_folder + data[p]))
        if who == 0:
            return my_styles
        elif who == 1:
            return my_js

    def single(dist_folder, who, specific):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + "/.." + dist_folder + "/manifest.json") as json_file:
            data = json.load(json_file)
            my_styles = []
            my_js = []
            for p in data:
                extension = os.path.splitext(data[p])[1]
                if(extension == ".js"):
                    print(data[p])
                    if(data[p].find(specific) > 0):
                        my_js = '{0}'.format(dist_folder + "/" + data[p])
                elif(extension == ".css"):
                    my_styles.append('{0}'.format(dist_folder + data[p]))
        if who == 0:
            return "".join(my_styles)
        elif who == 1:
            return "".join(my_js)
