import 'package:flutter/material.dart';
import 'package:thebeerexperience/screens/brouwers_screen.dart';
import 'package:thebeerexperience/screens/map_screen.dart';
import 'package:thebeerexperience/screens/sponsors_screen.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(BeerApp());
}

class BeerApp extends StatelessWidget {
  const BeerApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.brown),
      routes: {
        '/': (context) => HomeScreen(),
        '/map': (context) => MapScreen(),
        '/brouwers': (context) => BrouwersScreen(),
        '/sponsors': (context) => SponsorsScreen()
      },
      initialRoute: '/',
    );
  }
}