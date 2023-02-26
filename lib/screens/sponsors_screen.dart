import 'package:flutter/material.dart';
import 'package:thebeerexperience/shared/menu_bottom.dart';
import 'package:thebeerexperience/shared/menu_drawer.dart';

class SponsorsScreen extends StatelessWidget {
  const SponsorsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Image.asset(
              'assets/images/Logo.png',
              fit: BoxFit.contain,
              height: 50,
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("The Beer Experience"),
            ),
          ],
        ),
      ),      drawer: MenuDrawer(),
      bottomNavigationBar: MenuBottom(),
      body: Container(
        // decoration: BoxDecoration(
        //     image: DecorationImage(
        //   image: AssetImage('../../assets/images/Logo.png'),
        //   fit: BoxFit.cover,
        // )),
        child: Center(
            child: Container(
                padding: EdgeInsets.all(24),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.all(Radius.circular(20)),
                  color: Colors.white70,
                ),
                child: Text('Sponsors',
                    textAlign: TextAlign.center,
                    // ignore: prefer_const_literals_to_create_immutables
                    style: TextStyle(fontSize: 22, shadows: [
                      Shadow(
                          offset: Offset(1.0, 1.0),
                          blurRadius: 2.0,
                          color: Colors.grey)
                    ])))),
      ),
    );
  }
}