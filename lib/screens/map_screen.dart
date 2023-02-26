import 'package:flutter/material.dart';
import 'package:thebeerexperience/shared/menu_bottom.dart';
import 'package:thebeerexperience/shared/menu_drawer.dart';
import 'package:photo_view/photo_view.dart';

class MapScreen extends StatelessWidget {
  const MapScreen({Key? key}) : super(key: key);

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
        ),        drawer: MenuDrawer(),
        bottomNavigationBar: MenuBottom(),
        body: Container(
            child: Center(
          child: Container(
              padding: EdgeInsets.all(24),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(20)),
                color: Colors.white70,
              ),
              child: (PhotoView(
                imageProvider:
                    AssetImage("assets/images/TBE23 algemeen plan.png"),
                backgroundDecoration: BoxDecoration(color: Colors.white),
              ))),
        )));
  }
}
