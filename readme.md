# Custom Among Us Announcement Server
This is a custom announcement server for Among Us.
Just change the announcement constant in the index.js file.

> **Note**: This is only the server!

To actually implement this in the game add this patch to your mod:
```CS
[HarmonyPatch]
public static class CustomAnnouncementServerPatch
{
    [HarmonyPatch(typeof(AnnouncementPopUp), nameof(AnnouncementPopUp.Init))]
    [HarmonyPrefix]
    static void ChangeAnnouncementServerToCustomPatch(AnnouncementPopUp __instance)
    {
        //Replaces the URL with your own so it requests the announcement from your server
        Constants.BaseEndpoint = "http://localhost:443/amongus/";
    }

    [HarmonyPatch(typeof(AnnouncementPopUp), nameof(AnnouncementPopUp.Init))]
    [HarmonyPostfix]
    static void ChangeAnnouncementServerBackPatch(AnnouncementPopUp __instance)
    {
        //Show the announcement
        __instance.Show();
        
        //Resets it back to the default URL
        Constants.BaseEndpoint = "https://backend.innersloth.com/api/";
    }
}
```