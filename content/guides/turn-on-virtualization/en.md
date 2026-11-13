---
# Guide → lvlulcuma.com/en/guides/turn-on-virtualization/
title: "Turn on virtualization in UEFI (BIOS)"
date: 2026-11-13
category: configure   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 10   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
revisions:          # after publishing, add a line for each change
  - date: 2026-11-13
    note: "The Windows and the Linux steps of each section sit in their own labelled boxes."
dek: "Check whether your processor's virtualization is on, switch it on in your computer's startup settings if it isn't, and make sure it worked."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows and tabs count from 1.
visuals:
  # Task Manager's CPU page, before and after: only the marked row changes.
  task-manager:
    kind: window
    title: "Task Manager"
    head: ["CPU", "Intel(R) Core(TM) …"]
    rows:
      - ["Base speed", "…"]
      - ["Sockets", "…"]
      - ["Cores", "…"]
      - ["Logical processors", "…"]
      - ["Virtualization", ""]
      - ["L1 cache", "…"]
    mark: 5
    states:
      - { label: "Switched off", value: "Disabled", tone: stop }
      - { label: "Switched on", value: "Enabled", tone: go }
    caption: "Under the graph on the <strong>CPU</strong> page. Your numbers will differ: only the <strong>Virtualization</strong> line matters. The processor's name is at the top right, starting with <strong>Intel</strong> or <strong>AMD</strong>."
  # The way into the UEFI from Windows 11, as on Microsoft's "Enable Virtualization on Windows".
  way-in:
    kind: route
    stages:
      - where: "In Windows 11"
        steps: ["Settings", "System", "Recovery", "Advanced startup: Restart now"]
      - where: "After the restart: Choose an option"
        steps: ["Troubleshoot", "Advanced options", "UEFI Firmware Settings", "Restart"]
    caption: "Two stops: Settings in Windows, then the blue screen Windows restarts into. On Windows 10, the first part is <strong>Settings</strong> &gt; <strong>Update &amp; Security</strong> &gt; <strong>Recovery</strong>."
  # A made-up firmware screen, to show what to look for.
  setup-screen:
    kind: screen
    title: "Setup Utility"
    badge: "Example"
    tabs: ["Main", "Advanced", "Security", "Boot", "Exit"]
    tab: 2
    rows:
      - ["Hyper-Threading", "[Enabled]"]
      - ["Intel Virtualization Technology", "[Enabled]"]
      - ["Intel VT-d", "[Disabled]"]
    mark: 2
    keys: [["↑↓", "Move"], ["Enter", "Change"], ["F10", "Save and exit"], ["Esc", "Back"]]
    caption: "Made up, to show the idea. Yours has its own look and words, and newer ones work with the mouse too. The keys are listed on the screen, usually along the bottom or the side."
  # What the switch is called. Each name is one a maker uses in its own instructions (the links in "makers").
  names:
    kind: cards
    layout: rows
    cards:
      - title: "Intel"
        text: "The processor's name starts with Intel."
        tags: ["Intel Virtualization Technology", "Intel (VMX) Virtualization Technology", "Intel VTX", "VT-x"]
      - title: "AMD"
        text: "The processor's name starts with AMD."
        tags: ["SVM Mode", "AMD-SVM", "AMD-V"]
      - title: "Any processor"
        text: "Some makers use a plain name for both."
        tags: ["Virtualization", "Virtualization Technology", "Virtualization Technology (VTx)"]
    caption: "Different words, one switch. It sits with the processor (CPU) settings."
  # Each maker's key and menu, from its own support page (the link). Alphabetical; Surface and "another maker" last.
  makers:
    kind: finder
    title: "Your computer's maker"
    labels: { key: "Key", where: "Where", note: "Note", link: "The maker's own instructions" }
    items:
      - name: "Acer"
        key: "F2"
        press: "Hold the power button for 5 seconds so the computer is fully off. Switch it on and press <kbd>F2</kbd>."
        where: "<strong>Advanced</strong>: <strong>Intel VTX</strong> on Intel models, <strong>AMD-SVM</strong> on AMD models."
        note: "Not there? On some models, <kbd>Ctrl</kbd> <kbd>S</kbd> shows hidden settings."
      - name: "ASUS laptop"
        key: "F2"
        press: "With the laptop fully off, hold <kbd>F2</kbd> and press the power button. Let go when the settings appear."
        where: "<strong>Intel Virtualization Technology</strong>, or <strong>SVM Mode</strong> on AMD models, usually on the <strong>Advanced</strong> page. If the first screen is a simple one (EZ Mode), switch to Advanced Mode first."
        note: "ASUS turns it on at the factory, so check Task Manager first. Greyed out? Set <strong>Intel Trusted Execution Technology</strong> to <strong>Disabled</strong>, then try again."
        link: "https://www.asus.com/support/FAQ/1043181"
      - name: "ASUS motherboard (desktop)"
        key: "Del"
        press: "Press <kbd>Del</kbd> or <kbd>F2</kbd> right after switching on."
        where: "Press <kbd>F7</kbd> for Advanced Mode (ROG boards open in it), then <strong>Advanced &gt; CPU Configuration</strong>: <strong>Intel (VMX) Virtualization Technology</strong> or <strong>SVM Mode</strong>."
        note: "On by default on ASUS boards for Intel processors."
        link: "https://www.asus.com/support/FAQ/1045141"
      - name: "Dell"
        key: "F2"
        press: "Press <kbd>F2</kbd> when the Dell logo appears."
        where: "<strong>Virtualization Support &gt; Virtualization</strong>, or <strong>Advanced &gt; Virtualization</strong>, depending on the model."
        note: "Models from 2025 on hide some settings: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd> shows them. No virtualization setting at all means the computer doesn't support it."
        link: "https://www.dell.com/support/kbdoc/en-us/000195978"
      - name: "HP"
        key: "F10"
        press: "Switch the computer on and press <kbd>F10</kbd> right away."
        where: "OMEN, Victus, Spectre, ENVY and Pavilion: <strong>Configuration &gt; Virtualization Technology</strong>. EliteBook, EliteDesk and other business models: <strong>Advanced &gt; System Options &gt; Virtualization Technology (VTx)</strong>."
        note: "Some older business models have it under <strong>Security &gt; System Security</strong>."
        link: "https://support.hp.com/us-en/document/ish_5637142-5637191-16"
      - name: "Lenovo ThinkPad, ThinkCentre"
        key: "F1"
        press: "Press <kbd>F1</kbd> right after switching on."
        where: "The <strong>Security</strong> tab; on a ThinkPad, <strong>Security &gt; Virtualization</strong>."
        note: "If no page has a virtualization setting, the computer doesn't support it."
        link: "https://support.lenovo.com/us/en/solutions/HT500006"
      - name: "Lenovo IdeaPad, Yoga"
        key: "F2"
        press: "Press <kbd>F2</kbd> (or <kbd>Fn</kbd> <kbd>F2</kbd>) right after switching on. Or, with the laptop off, press the small Novo button and choose <strong>BIOS Setup</strong>."
        where: "Usually the <strong>Configuration</strong> tab."
        note: "If no page has a virtualization setting, the computer doesn't support it."
        link: "https://support.lenovo.com/us/en/solutions/HT500216"
      - name: "MSI laptop"
        key: "Del"
        press: "Press <kbd>Del</kbd> right after switching on."
        where: "<strong>Advanced</strong>: <strong>Intel Virtualization Technology</strong>, or <strong>SVM Mode</strong> on AMD models."
        note: "MSI turns it on at the factory, so check Task Manager first."
        link: "https://www.msi.com/faq/8790"
      - name: "MSI motherboard (desktop)"
        key: "Del"
        press: "Press <kbd>Del</kbd> right after switching on."
        where: "<strong>OC &gt; CPU Features &gt; SVM Mode</strong> on boards for AMD processors. Boards for Intel have their setting in the CPU settings too."
        link: "https://www.msi.com/faq/mb-2581"
      - name: "Other desktop motherboards"
        key: "Del"
        press: "Usually <kbd>Del</kbd> right after switching on; the first screen says which key opens the setup."
        where: "Switch to the advanced view if there is one, then look in the processor (CPU) settings, under <strong>Advanced</strong> or the overclocking tab."
        note: "The board's manual, on its maker's site, names the exact menu."
      - name: "Microsoft Surface"
        tag: "Already on"
        where: "Nowhere: Microsoft says Surface devices have virtualization on already."
        link: "https://support.microsoft.com/topic/c5578302-6e43-4b4b-a449-8ced115f58e1"
      - name: "Another maker"
        press: "Watch the first screen after switching on: it often says which key opens the setup. <kbd>F2</kbd>, <kbd>Del</kbd>, <kbd>F10</kbd> and <kbd>F1</kbd> are the usual ones. Or use the way through Windows above."
        where: "Search the maker's support site for “enable virtualization” and your model, or look through each tab: the setting sits with the processor (CPU) settings."
---

Your processor has a built-in feature for running virtual machines, called **virtualization**: Intel calls it
VT-x, AMD calls it AMD-V or SVM. With it on, a virtual machine runs at nearly full speed. With it off, most
hypervisors (the programs that run virtual machines, like VirtualBox) won't start one at all. Many computers come
with it switched off.

The switch isn't in Windows or Linux. It's in the **UEFI**: the small program built into your computer that starts
it up, before the operating system loads. Older computers call it the **BIOS**, and many people still do. You'll
change one setting there.

> [!NOTE]
> On a Mac? There's nothing to switch on: a Mac has virtualization on already, so you can skip this guide.

> [!TIP]
> Open this guide on your phone: your computer restarts halfway through, and you'll want the steps in front of you.

## Check whether it's already on

<!-- for: windows -->

1. Press <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd> to open **Task Manager**.
2. Select **Performance**, then **CPU**.
3. Find **Virtualization** in the list under the graph.

   <!-- pic: task-manager -->

   **Enabled** means it's on: you're done, and there's nothing to change. **Disabled** means it's off: carry on.

4. While you're here, note the processor's name at the top right. It starts with **Intel** or **AMD**, and the switch
   has a different name for each.

<!-- for: linux -->

On Kali, Ubuntu or Debian, open a terminal. The first command installs a small checker, the second runs it:

```sh
sudo apt install cpu-checker
sudo kvm-ok
```

**KVM acceleration can be used** means it's on. **KVM acceleration can NOT be used** means it's off (or your
processor doesn't have it): carry on. On other Linux systems, `ls /dev/kvm` shows `/dev/kvm` when it's on. To see
whether your processor is Intel or AMD, run `lscpu | grep "Model name"`.

## Open the UEFI settings

Save your work first: the computer restarts.

<!-- for: windows -->

If your drive is encrypted with BitLocker or Device encryption, make sure you can get your recovery key (with a
Microsoft account, it's at [aka.ms/myrecoverykey](https://aka.ms/myrecoverykey)): Windows sometimes asks for it after
the startup settings change.

<!-- pic: way-in -->

1. Open **Settings** > **System** > **Recovery**. On Windows 10: **Settings** > **Update & Security** > **Recovery**.
2. Next to **Advanced startup**, select **Restart now**, then confirm.
3. The computer restarts into a blue screen, **Choose an option**. Select **Troubleshoot** > **Advanced options** >
   **UEFI Firmware Settings**.
4. Select **Restart**. The computer starts straight into its UEFI settings.

**The quick way:** right-click **Start** and choose **Terminal (Admin)** (on Windows 10, **Windows PowerShell
(Admin)**), then type this. `/r` restarts, `/fw` goes to the firmware (the UEFI) and `/t 0` means now:

```powershell
shutdown /r /fw /t 0
```

<!-- for: linux -->

This command restarts into the UEFI:

```sh
systemctl reboot --firmware-setup
```

<!-- /for -->

**No UEFI Firmware Settings button, or the command gives an error?** Use your maker's key instead: restart the
computer and tap the key right away, about twice a second, until the settings appear. Each maker's key is in the
list in the next section.

## Find the switch

Every computer's UEFI looks different. Some are text screens you move around with the arrow keys and
<kbd>Enter</kbd>; newer ones have pictures and take the mouse. Most of them look something like this:

<!-- pic: setup-screen -->

What the switch is called depends on your processor and the maker:

<!-- pic: names -->

1. Open your maker in the list and go where it says.

   <!-- pic: makers -->

2. Select the virtualization setting and change it to **Enabled**. Usually you press <kbd>Enter</kbd> and choose
   **Enabled**; some screens have a box to tick instead.
3. Leave everything else as it is.

   > [!WARNING]
   > Change only this one setting: others, like Secure Boot or the boot mode, can stop Windows from starting.
   > Changed something by mistake? Leave without saving (look for **Discard Changes and Exit**) and start again.

> [!ASIDE] VT-d and IOMMU
> Near the switch you may see **VT-d** (Intel) or **IOMMU** (AMD). That's a different feature, for giving a virtual
> machine a real device of your computer. Your lab doesn't need it, so leave it as it is.

## Save and restart

1. Press <kbd>F10</kbd>, or open **Exit** and choose **Save Changes and Exit** (the words vary a little).
2. Confirm with **Yes** or **OK**. The computer restarts into Windows or Linux as usual.

## Check it works

<!-- for: windows -->

1. Open **Task Manager** again (<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd>) and go to **Performance** > **CPU**.
2. **Virtualization** now says **Enabled**. Your computer is ready for virtual machines.

<!-- for: linux -->

Run `sudo kvm-ok` again: it now says **KVM acceleration can be used**. Your computer is ready for virtual machines.

<!-- /for -->

> [!NOTE]
> Still **Disabled** (or **can NOT be used**)? Some computers only take the change after a full power-off. Shut down
> (don't restart), wait a few seconds, and switch the computer on again.

## If something goes wrong

**The computer starts as usual instead of opening the settings.** The key has to be pressed early: tap it from the
moment the screen goes dark or you press the power button. Or use the way through Windows Settings or the Linux
command above, which need no key. On laptops where the top keys also change the volume and brightness, hold
<kbd>Fn</kbd> with the key (<kbd>Fn</kbd> <kbd>F2</kbd>).

**There's no virtualization setting anywhere.** Look through every tab, and try the maker's key for hidden settings
(Dell: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd>; Acer: <kbd>Ctrl</kbd> <kbd>S</kbd>). If it really isn't there,
Dell and Lenovo say the computer doesn't support virtualization.

**The setting is greyed out.** On an ASUS laptop, set **Intel Trusted Execution Technology** to **Disabled** first.
On a work or school computer, an administrator may have locked the settings with a password: ask them.

<!-- for: windows -->

**There's no UEFI Firmware Settings button.** Windows was probably installed the older way (in legacy BIOS mode), or
the computer doesn't offer it. Use your maker's key instead.

**Windows asks for a BitLocker recovery key.** On another device, open
[aka.ms/myrecoverykey](https://aka.ms/myrecoverykey), sign in with the Microsoft account you use on this computer,
and type the key it shows. Windows starts as usual after that.

**Task Manager says Enabled, but VirtualBox says VT-x isn't available.** The UEFI part is done: another feature of
Windows is using virtualization (Hyper-V, or a security feature built on it). That's a setting in Windows, and the
VirtualBox guide deals with it.
<!-- guide: install-virtualbox-windows -->
