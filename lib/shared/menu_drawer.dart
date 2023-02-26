import 'package:flutter/material.dart';
import 'package:thebeerexperience/screens/brouwers_screen.dart';
import 'package:thebeerexperience/screens/home_screen.dart';
import 'package:thebeerexperience/screens/map_screen.dart';
import 'package:thebeerexperience/screens/sponsors_screen.dart';

class MenuDrawer extends StatelessWidget {
  const MenuDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: ListView(
      children: buildMenuItems(context),
    ));
  }

  List<Widget> buildMenuItems(BuildContext context) {
    final List<String> menuTitles = [
      'Home',
      'Map',
      'Brouwers',
      'Sponsors'
    ];
    List<Widget> menuItems = [];
    menuItems.add(DrawerHeader(
        decoration: BoxDecoration(color: Colors.brown),
        child: Text('The Beer Experience',
            style: TextStyle(color: Colors.white, fontSize: 28))));
    menuTitles.forEach((String element) {
      Widget screen = Container();
      menuItems.add(ListTile(
        title: Text(
          element,
          style: TextStyle(fontSize: 18),
        ),
        onTap: () {
          switch (element) {
            case 'Home':
              screen = HomeScreen();
              break;
            case 'Map':
              screen = MapScreen();
              break;
            case 'Brouwers':
              screen = BrouwersScreen();
              break;
            case 'Sponsors':
              screen = SponsorsScreen();
              break;
          }
          Navigator.of(context).pop();
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (context) => screen));
        },
      ));
    });
    return menuItems;
  }
}
